import { Button, Input, VStack } from '@chakra-ui/react'
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { cartListAtom } from '../store/store';

export default function Checkout() {

    const [loading, setLoading] = useState(false)    
    const [cartList] = useAtom(cartListAtom)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        setLoading(true)
        await fetch("https://react-course-51f89-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: data,
                items: cartList
            })
        })
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack width={'100%'} pt={'2rem'}>
                <div style={{ width: '100%' }}>
                    <Input placeholder='Your Name' {...register("name", { required: true })} />
                    {errors.name?.type === 'required' && "Name is required"}
                </div>
                <div style={{ width: '100%' }}>
                    <Input placeholder='Street' {...register("street", { required: true })} />
                    {errors.street?.type === 'required' && "Street is required"}
                </div>
                <div style={{ width: '100%' }}>
                    <Input placeholder='Postal Code' {...register("postalCode", { required: true, minLength: 5, maxLength: 5 })} />
                    {errors.postalCode?.type === 'required' && "Postal Code is required"}
                    {(errors.postalCode?.type === 'minLength' || errors.postalCode?.type === 'minLength') && "Postal Code must be 5 digits"}
                </div>
                <div style={{ width: '100%' }}>
                    <Input placeholder='City' {...register("city", { required: true })} />
                    {errors.city?.type === 'required' && "City is required"}
                </div>
                <Button disabled={loading} isLoading={loading} type="submit" colorScheme={'blue'}>Checkout</Button>
            </VStack>
        </form>
    )
}
