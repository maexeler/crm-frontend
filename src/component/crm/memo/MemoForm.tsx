import React from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { TextField, TextFieldProps, Button, Grid, Typography } from '@material-ui/core'
import * as Yup from "yup"

import { Memo } from '../../../model/crm'

interface MemoFormProps {
	memo: Memo
	submitText: string
	submitFunction(memo: Memo):void
	resetFormAfterSubmit: boolean
}

const MemoForm: React.FC<MemoFormProps> = ({memo, submitText, submitFunction, resetFormAfterSubmit}) => {
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{note: memo.note}}
			validationSchema={todoValidationSchema}
			onSubmit={(values, {resetForm}) => {
				memo.note = values.note
				submitFunction(memo)
				if (resetFormAfterSubmit) { resetForm() }
			}}
		>
			{({ errors, touched }) => {
				return <Form>
					<Grid container direction='column' spacing={1}>
						<Grid item >
							<Field
								name = 'note'
								component={MaterialUiField}
								placeholder='Enter a new Memo'
								label='note'
							/>
							{errors.note && touched.note
								? (<Typography color='secondary'>{errors.note}</Typography>)
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
	note: Yup.string().required('A Note is required'),
})

export default MemoForm