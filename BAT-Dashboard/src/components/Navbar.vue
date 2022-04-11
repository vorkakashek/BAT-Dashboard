<template lang="pug">
nav
    .logo Merchandising Dashboard

    div navbar
</template>

<style lang="scss" scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    height: var(--navbar);
    width: 100%;
    background-color: #fff;
    box-shadow: var(--shadow);
    z-index: 999;
    display: flex;
    align-items: center;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
    width: var(--sidebar);
    position: relative;
    padding: 0 var(--pdlg);
    font-weight: 700;
    font-size: 18px;
    margin-right: var(--pdxl);
    color: var(--blue-dark);
    &:after {
        content: "";
        width: calc(100% - var(--pdlg) * 2);
        // left: 0;
        bottom: 0;
        height: 4px;
        position: absolute;
        z-index: 1;
        background: linear-gradient(
                90deg,
                #0e2b63 30.4785%,
                rgba(0, 0, 0, 0) 30.4785%
            ),
            linear-gradient(
                90deg,
                #004f9f 52.15788%,
                rgba(0, 0, 0, 0) 52.15788%
            ),
            linear-gradient(
                90deg,
                #00b1eb 64.72807%,
                rgba(0, 0, 0, 0) 64.72807%
            ),
            linear-gradient(
                90deg,
                #ef7d00 73.22551%,
                rgba(0, 0, 0, 0) 73.22551%
            ),
            linear-gradient(
                90deg,
                #ffbb00 79.62792%,
                rgba(0, 0, 0, 0) 79.62792%
            ),
            linear-gradient(
                90deg,
                #50af47 86.69237%,
                rgba(0, 0, 0, 0) 86.69237%
            ),
            linear-gradient(90deg, #afca0b 92.0305%, rgba(0, 0, 0, 0) 92.0305%),
            linear-gradient(90deg, #5a328a 97.0083%, rgba(0, 0, 0, 0) 97.0083%),
            linear-gradient(90deg, #e72582 100%, rgba(0, 0, 0, 0) 100%);
    }
}
</style>