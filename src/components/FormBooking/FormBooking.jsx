import { useForm } from "react-hook-form";
import * as S from "./FormBooking.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { newBookingSchema } from "../../validations/new-booking.schema";

export function FormBooking() {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({
        resolver: yupResolver(newBookingSchema)
    });

    const submit = (e)=> {
        console.log(e);
        console.log("Entrou");
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
                <S.ButtonSubimit>Reservar</S.ButtonSubimit>
            </S.DivInputs>
        </S.FormBooking>
    )
}