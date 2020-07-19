
<template>
 
  <form class="col-md-6 m-auto p-4 FormCONT mt-3">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
   <v-text-field
      v-model="EmpCode"
      :error-messages="CodeErrors"
      :counter="5"
      type="number"
      label="Employee Code"
      required
      @input="$v.EmpCode.$touch()"
      @blur="$v.EmpCode.$touch()"
    ></v-text-field>

    <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
    ></v-select>
    
  <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label=" Birthday "
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
  

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      EmpCode: { required, maxLength: maxLength(5) },
      email: { required, email },
      select: { required },
    },

    data: () => ({
      name: '',
      EmpCode: '',
  
     select: null,
     items: [
        ' Hr ',
        ' Ui ',
        ' Marketing ',
        ' Ux ',
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
       CodeErrors () {
        const errors = []
        if (!this.$v.EmpCode.$dirty) return errors
        !this.$v.EmpCode.maxLength && errors.push('Employee code must be at most 5 characters long')
        !this.$v.EmpCode.required && errors.push('code is required.')
        return errors
      },
       selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.EmpCode=''
       
        this.select = null
      
      },
    },
  }
</script>

<style >
i.v-icon.notranslate.material-icons.theme--light , .v-input__prepend-outer{
    display: none !important;
}
.v-date-picker-table .v-btn.v-btn--active, .v-picker__title {
    
    background-color: #17a2b8;
}
.FormCONT{
    border: 1px solid #17a2b8;
    border-radius: 3px;
    margin-top: 3% !important;
}
div.error--text {
    color: red !important;
}
</style>