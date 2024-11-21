<template>
    <div class="container">
        <!-- <div class=" "> -->
            <!-- <div class="col-md-5 ms-5">
                <img src=""
                    class="img-fluid" alt="Sign In" style=" width: 400px; margin-top: 10px; border: 1px black solid;"/>
            </div> -->
            <div class="container m-4 d-flex justify-content-center" >
                <Form @submit="submitSignIn" :validation-schema="signInFormSchema" class="w-50 m-auto p-5 " style=" border-radius: 5px; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" >
                    <h4 class="text-center">Đăng nhập</h4>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <Field name="email" type="email" class="form-control" v-model="signInLocal.email" />
                        <ErrorMessage name="email" class="error-feedback" />
                    </div>
                    <div class="form-group">
                        <label for="password">Mật khẩu</label>
                        <Field name="password" type="password" class="form-control" v-model="signInLocal.password" />
                        <ErrorMessage name="password" class="error-feedback" />
                    </div>
                    <div class="form-group mb-5">
                        <button class="btn btn-primary w-100 mt-3">Đăng nhập</button>
                    </div>
                </Form>
            </div>
        <!-- </div> -->
    </div>
</template>
  
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent, reactive} from "vue";
export default defineComponent({
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    setup(props, context) {
        const signInLocal = reactive({
            email: "",
            password: "",
        });
        const signInFormSchema = yup.object().shape({
            email: yup.string().required("Email không được để trống."),
            password: yup.string().required("Mật khẩu không được để trống."),
        });
        const submitSignIn = () => {
            context.emit("submit:signin", signInLocal);
        };
        return {
            signInLocal,
            signInFormSchema,
            submitSignIn,
        };
    },
});
</script>
  
<style scoped>
.form-group {
    margin-bottom: 1rem;
}

.form-control {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.error-feedback {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    font-weight: bold;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
    color: #fff;
    font-weight: bold;
}</style>
  