import { useFormik } from "formik";

export default function Formik() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  });
}