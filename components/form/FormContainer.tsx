// handles post form submission, display message from action function if have
'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState ={
    message: '',
};

function FormContainer({
    action,children // children is everything inside the FormContainer tag
}:{action:actionFunction, children:React.ReactNode}){
    const [state,formAction] = useFormState(action,initialState); // get msg from action function
    const {toast} = useToast()
    useEffect(()=>{ // display message if not empty
        if(state.message){
            toast({
                description:state.message
            })
        }
    },[state.message,toast])


    return <form action={formAction}>{children}</form>
}

export default FormContainer