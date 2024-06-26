import { useForm } from "react-hook-form";
import * as S from "./FormBooking.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { newBookingSchema } from "../../validations/new-booking.schema";
import { createBooking } from "../../service/createNewBooking";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FormBooking() {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({
        resolver: yupResolver(newBookingSchema)
    });

    const submit = (e)=> {   
        createBooking(e.apartment_number, e.apartment_block, e.color, e.number_park, e.owner_name, e.plate, e.status, e.model)
        toast.success('Reserva realizada com sucesso!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
    }

    return (
        <S.FormBooking onSubmit={handleSubmit(submit)}>
            <S.DivTitle>
                <h3>Faça sua Reserva!</h3>
            </S.DivTitle>
            <S.DivInputs>
                <S.DivSpare>
                    <S.LabelTitleInput>Placa de Veículo</S.LabelTitleInput>
                    <S.Input {...register("plate")} required={errors.plate} />
                    {errors.plate && <S.Alert>{errors.plate?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Nome do proprietário</S.LabelTitleInput>
                    <S.Input {...register("owner_name")} required={errors.owner_name?.message} />
                    {errors.owner_name && <S.Alert>{errors.owner_name?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Número do apartamento</S.LabelTitleInput>
                    <S.Input {...register("apartment_number")} required={errors.apartment_number?.message} />
                    {errors.apartment_number && <S.Alert>{errors.apartment_number?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Bloco do apartamento</S.LabelTitleInput>
                    <S.Input {...register("apartment_block")} required={errors.apartment_block?.message} />
                    {errors.apartment_block && <S.Alert>{errors.apartment_block?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Modelo do veículo</S.LabelTitleInput>
                    <S.Input {...register("model")} required={errors.model?.message} />
                    {errors.model && <S.Alert>{errors.model?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Cor do veículo</S.LabelTitleInput>
                    <S.Input {...register("color")} required={errors.color?.message} />
                    {errors.color && <S.Alert>{errors.color?.message}</S.Alert>}
                </S.DivSpare>
                <S.DivSpare>
                    <S.LabelTitleInput>Número da vaga de estacionamento</S.LabelTitleInput>
                    <S.Input {...register("number_park")} required={errors.number_park?.message} />
                    {errors.number_park && <S.Alert>{errors.number_park?.message}</S.Alert>}
                </S.DivSpare>
                    <S.Input hidden {...register("status")} value={`Ocupada`} />
                <S.ButtonSubimit>Reservar</S.ButtonSubimit>
            </S.DivInputs>
            <ToastContainer/>
        </S.FormBooking>
    )
}