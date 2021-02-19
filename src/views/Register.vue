<template>
  <div class="container">

    <div class="row">
      <div class="h1 mb-3">KOPROK-IN</div>
    </div>

    <div class="row justify-content-center" >

      <div class="col-4">
        <div class="h3"><b>Let's Joining With Us:</b></div>

        <form @submit.prevent="register">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="email_register"
              placeholder="name@example.com"
              required
            >
            <label for="email">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              v-model="password_register"
              placeholder="Password"
              required
            >
            <label for="password">Password</label>
          </div>

          <button
            type="submit"
            class="btn btn-outline-primary"
          >Register <span class="fa fa-user-plus"></span>
          </button>

        </form>
        <router-link :to="{ name: 'Login' }" class="nav-link text-gray mt-3">Back to Login Form </router-link>
      </div>
      <!-- END FORM -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email_register: '',
      password_register: ''
    }
  },
  methods: {
    register () {
      const dataInput = {
        email: this.email_register,
        password: this.password_register
      }
      this.email_register = ''
      this.password_register = ''
      this.$store.dispatch('register', dataInput)
    }
  }
}
</script>

<style>

</style>
