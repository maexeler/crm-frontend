import React from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { TextField, TextFieldProps, Button, Grid, Typography } from '@material-ui/core'
import * as Yup from "yup"

import { Customer } from '../../../model/crm'

interface CustomerFormProps {
	customer: Customer
	submitText: string
	submitFunction(customer: Customer):void
	resetFormAfterSubmit: boolean
}

const CustomerForm: React.FC<CustomerFormProps> = ({customer, submitText, submitFunction, resetFormAfterSubmit}) => {
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{name: customer.name}}
			validationSchema={todoValidationSchema}
			onSubmit={(values, {resetForm}) => {
				customer.name = values.name
				submitFunction(customer)
				if (resetFormAfterSubmit) { resetForm() }
			}}
		>
			{({ errors, touched }) => {
				return <Form>
					<Grid container direction='column' spacing={1}>
						<Grid item >
							<Field
								name = 'name'
								component={MaterialUiField}
								placeholder='Enter a new Customer'
								label='name'
							/>
							{errors.name && touched.name
								? (<Typography color='secondary'>{errors.name}</Typography>)
								: null
							}
						</Grid>
						<Grid item >
							<Button
								type='submit'
								variant='contained' color='primary' fullWidth
							>
									{submitText}
							</Button>
						</Grid>
					</Grid>
				</Form>
			}}
		</Formik>
	)
}

const MaterialUiField: React.FC<FieldProps & TextFieldProps> =
	({field, form, ...textProps}) => <TextField fullWidth multiline {...field} {...textProps}/>

const todoValidationSchema = Yup.object().shape({
	name: Yup.string().required('A Name is required'),
})

export default CustomerForm