import * as yup from "yup";

const plate_lincese = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/

export const newBookingSchema = yup.object({
    plate: yup.string().matches(plate_lincese, "Padrão está incorreto! EX: AAA0A00").required("Campo Obrigatório!"),
    owner_name: yup.string().required("Campo Obrigatório!"),
    apartment_number: yup.number().typeError("Necessário ser um número").required("Campo Obrigatório!"),
    apartment_block: yup.number().typeError("Necessário ser um número").required("Campo Obrigatório!"),
    model: yup.string().required("Campo Obrigatório!"),
    color: yup.string().required("Campo Obrigatório!"),
    number_park: yup.number().typeError("Necessário ser um número").required("Campo Obrigatório"),
    status: yup.string(),
})