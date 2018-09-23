<script>
    module.exports = {
        ready: function() {
            if(this.$auth.isLoggedIn()) {
                this.$router.go('/feed');
            } else {
                this.$router.go('/login');
            }
        }
    };
</script>
