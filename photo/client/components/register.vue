<style scoped>
    .container {
        margin: 10px auto;
        width: 50%;
    }

    .form-control {
        margin: 10px 0;
    }
</style>

<template>
    <div class='form-group container'>
        <a href="#!/login">Войти</a>
        <input type='text' class='form-control' placeholder='Логин'
            v-model='username'>
        <input type='password' class='form-control' placeholder='Пароль'
            v-model='password'>
        <input type='password' class='form-control' placeholder='Повтор пароля'
            v-model='repeat'>
        <button type='button' class='btn btn-danger btn-block' v-on:click='register'>
            Register
        </button>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                username: '',
                password: '',
                repeat: ''
            };
        },
        methods: {
            register: function() {
                if(this.password !== this.repeat) {
                    alert('Пароли не совпадают!');
                } else {
                    var promise = this.$auth.register(this.username, this.password);
                    var self = this;
                    promise.then(function() {
                        self.$router.go('/login');
                    });
                }
            }
        }
    };
</script>
