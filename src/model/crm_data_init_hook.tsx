import { useEffect } from 'react'
import { useStoreActions } from '../store/ModelStore';

/**
 * Call this funtion in application component.
 * 
 * Afterwards the todo data is initialized.
 */
const useCrmInitDataHook = () => {
    const initData = useStoreActions(actions => actions.crmModel.initData)
    useEffect(
        () => {
            initData()
            // eslint-disable-next-line
        }, []  // Only run the effect once
    )
}

export { useCrmInitDataHook }