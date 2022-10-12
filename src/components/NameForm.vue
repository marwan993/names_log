<template>
    <form id="name-form" v-on:submit.prevent="submit">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">First Name <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="v$.firstName.$model" :class="{'is-invalid': validationStatus(v$.firstName)}" class="form-control form-control-lg">
                <div v-if="v$.firstName.required" class="invalid-feedback">Must be valid /  only alphabetic and no longer than 20.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Last Name <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="v$.lastName.$model" :class="{'is-invalid': validationStatus(v$.lastName)}" class="form-control form-control-lg">
                <div v-if="v$.lastName.required" class="invalid-feedback">Must be valid / only alphabetic and no longer than 20.</div>

            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-lg mt-2">Submit</button>
            </div>
        </div>
    </form>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, maxLength, alpha } from '@vuelidate/validators'

export default {
    name: 'NameForm',
    setup: function() {
    return { v$: useVuelidate() }
    },
    data: function() {
        return {
            firstName: '', 
            lastName: '', 
        }
    }, 
    validations: {
        firstName: {required, maxLength: maxLength(20), alpha},
        lastName: {required, maxLength: maxLength(20), alpha},
    },

    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.v$.$touch();
            if (this.v$.$pendding || this.v$.$error) return;

            alert('Data Submit');
        }
    }
}
</script>
<style>
.btn-vue{
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
</style>