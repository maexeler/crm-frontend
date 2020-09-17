import React from 'react'
import { 
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    Typography,
 } from '@material-ui/core'
 import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { Customer } from '../../../model/crm'
import { useStoreState, useStoreActions } from "../../../store/ModelStore";

interface CustomerListItemProps {
    customer: Customer;
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({customer}) => {
    const deleteTodo = useStoreActions(actions => actions.crmModel.deleteCustomer)

    const selectedCustomer = useStoreState(state => state.crmModel.selectedCustomer)
    const setSelectedCustomer = useStoreActions(actions => actions.crmModel.setSelectedCustomer)
    return(
      <ListItem
        selected={selectedCustomer ? (customer.id === selectedCustomer.id) : false}
      >
        <Typography
          noWrap
          onClick={() => { setSelectedCustomer(customer) }}
        >
          {customer.name}
        </Typography>
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            color='secondary'
            onClick={() => { deleteTodo(customer) }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CustomerListItem