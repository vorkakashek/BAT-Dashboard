<script>
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
            emailErrors: [],
            passwordErrors: [],
            emailfocused: false,
            passfocused: false,
        };
    },
    computed: {
        formReady() {
            return !this.emailErrors.length && !this.passwordErrors.length;
        },
    },
    methods: {
        onsubmit() {
            this.emailErrors = this.email ? [] : ["Email is required"];
            this.passwordErrors = this.password ? [] : ["Password is required"];
            if (!this.formReady) {
                return;
            }
            this.$router.push({ name: "Dashboard" });
        },

        startAnimation() {
            // document.querySelector()
        },
    },
    mounted() {
        this.startAnimation();
    },
};
</script>


<template lang="pug">
.auth-panel__wrap.fajc
    .auth-panel.panel
        transition(name="headerAnim", appear)
            .auth-panel__header.fajc
                | Merchandising Dashboard
        transition(name="bodyAnim", appear)
            .auth-panel__body
                .auth-panel__tab
                    .auth-panel__tab-name Login
                    hr
                form(@submit.prevent="onsubmit")
                    .error(v-if="!!emailErrors.length") {{ emailErrors[0] }}
                    .error(v-if="!!passwordErrors.length") {{ passwordErrors[0] }}
                    label.auth-input
                        transition(name="authInputLabel", appear)
                            span.auth-input__label(
                                v-bind:class="{ focused: emailfocused || email !== '' }"
                            ) email
                        transition(name="input", appear)
                            input(
                                v-model="email",
                                type="email",
                                @focus="emailfocused = true",
                                @blur="emailfocused = false"
                            )
                    label.auth-input
                        transition(name="authInputLabel", appear style="animation-delay: .5s")
                            span.auth-input__label(
                                v-bind:class="{ focused: passfocused || password !== '' }"
                            ) password
                        transition(name="input", appear style="animation-delay: .4s")
                            input(
                                v-model="password",
                                type="password",
                                @focus="passfocused = true",
                                @blur="passfocused = false"
                            )
                    Btn(text="Login", @click="onsubmit", centered) 
</template>

<style lang="scss" scoped>

.auth-panel__wrap {
    width: 100vw;
    height: 100vh;
}

.auth-panel {
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
}

.auth-panel__body {
    overflow: hidden;
}

.auth-panel__header {
    background: var(--blue-dark);
    margin: calc(var(--pdxl) * -1);
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    font-size: 28px;
    line-height: 1.2;
    height: 124px;
    overflow: hidden;
    color: #fff;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        width: 100%;
        background: var(--BAT);
        height: 8px;
    }
}

.auth-panel__tab {
    margin-top: var(--pdlg);
    text-align: center;
}

.auth-panel__tab-name {
    font-weight: 700;
    font-size: 16px;
}

input {
    background-color: var(--grey);
    border: none;
    height: 36px;
    width: 100%;
    display: block;
    padding: 0 var(--pdlg);
    font-weight: 700;
    color: var(--blue-dark);
    outline: none;
    transition: all 0.3s ease;
    border-radius: var(--radius-4);
    &:focus {
        background-color: var(--grey-medium);
    }
}

.auth-input {
    position: relative;
    display: block;
    margin: var(--pdxl) 0;
}

.auth-input__label {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: var(--pd);
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05rem;
    transition: top 0.35s var(--tr-1);
    color: var(--blue-dark);
    &.focused {
        top: -50%;
    }
}

.headerAnim-enter-active {
    animation: headerAnim 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
    height: 0;
}

@keyframes headerAnim {
    from {
        height: 0;
    }

    to {
        height: 124px;
    }
}

.bodyAnim-enter-active {
    animation: bodyAnim 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) .2s;
    height: 0;
}

@keyframes bodyAnim {
    from {
        height: 0;
    }

    to {
        height: 250px;
    }
}

.authInputLabel-enter-active {
    animation: authInputLabel 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s;
    opacity: 0;
    top: -50%;
}

@keyframes authInputLabel {
    from {
        opacity: 0;
        top: -50%;
    }

    to {
        opacity: 1;
        top: 0;
    }
}

.input-enter-active {
    animation: input 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
    opacity: 0;
    width: 0;
}

@keyframes input {
    from {
        opacity: 0;
        width: 0;
    }

    to {
        opacity: 1;
        width: 100%;
    }
}

</style>