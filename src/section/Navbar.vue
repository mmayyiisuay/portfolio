<template>
    <div class="sticky top-0 z-50 ≈" @scroll="handleScroll">
        <div class="absolute w-full flex justify-center backdrop-blur-2xl">
            <nav class="container px-6 py-8 md:flex md:justify-between md:items-center w-screen">
                <div class="flex justify-between">
                    <div to="/" class="text-xl font-bold md:text-xl lg:ml-10 sub" :style="{ color: navbarTextColor }">
                        &lt; Natcha /&gt;
                    </div>
                    <div @click="toggleNav" class="md:hidden">
                        <button ref="btn" class="btn not-active">
                            <span :style="{ background: navbarTextColor }"></span>
                            <span :style="{ background: navbarTextColor }"></span>
                            <span :style="{ background: navbarTextColor }"></span>
                        </button>
                    </div>
                </div>
                <div>
                    <div :class="showMenu ? 'flex' : 'hidden '"
                        class="flex-col mt-8 md:mr-10 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 z-60 pl-[10%] md:pl-0 z-70"
                        :style="{ color: navbarTextColor }">
                        <a @click="toggleNav" href="#About" class="hover:text-indigo-400">
                            About
                        </a>
                        <a @click="toggleNav" href="#Works" class="hover:text-indigo-400">
                            Works
                        </a>
                        <a @click="toggleNav" href="#Contact" class="hover:text-indigo-400">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            isBtnClicked: false,
            btn: false,
            navbarTextColor: "white",
        };
    },
    mounted() {
        this.btn = document.querySelector(".btn");
        this.btnActive();
        const handleScrollEvent = () => this.handleScroll();
        window.addEventListener("scroll", handleScrollEvent);
    },
    beforeDestroy() {
        const handleScrollEvent = () => this.handleScroll();
        window.removeEventListener("scroll", handleScrollEvent);
    },
    methods: {
        toggleNav() {
            this.showMenu = !this.showMenu;
            this.btnActive();
        },
        btnActive() {
            if (this.btn) {
                this.btn.classList.toggle("active", this.isBtnClicked);
                this.btn.classList.toggle("not-active", !this.isBtnClicked);
                this.isBtnClicked = !this.isBtnClicked;
            }
        },
        handleScroll() {
            const scroll = window.scrollY;

            if (scroll > 400) {
                this.navbarTextColor = "blue";
            } else {
                this.navbarTextColor = "white";
            }
        },
    },
};
</script>

<style scoped>
@media (max-width: 400px) {
    .sub {
        font-size: 15px;
    }
}

.btn {
    position: relative;
    width: 30px;
    cursor: pointer;
}

span {
    display: block;
    width: 100%;
    border-radius: 2px;
    height: 3px;
    transition: all 0.3s;
    position: relative;
    background: #fff;
}

span+span {
    margin-top: 5px;
}

.active span:nth-child(1) {
    animation: ease 0.7s top forwards;
    width: 25px;
}

.not-active span:nth-child(1) {
    animation: ease 0.7s top-2 forwards;
}

.active span:nth-child(2) {
    animation: ease 0.7s scaled forwards;
    width: 25px;
}

.not-active span:nth-child(2) {
    animation: ease 0.7s scaled-2 forwards;
}

.active span:nth-child(3) {
    animation: ease 0.7s bottom forwards;
    width: 25px;
}

.not-active span:nth-child(3) {
    animation: ease 0.7s bottom-2 forwards;
}

@keyframes top {
    0% {
        top: 0;
        transform: rotate(0);
    }

    50% {
        top: 0px;
        transform: rotate(0);
    }

    100% {
        top: 0px;
        transform: rotate(145deg);
    }
}

@keyframes top-2 {
    0% {
        top: 0px;
        transform: rotate(145deg);
    }

    50% {
        top: 0px;
        transform: rotate(0deg);
    }

    100% {
        top: 0;
        transform: rotate(0deg);
    }
}

@keyframes bottom {
    0% {
        bottom: 0;
        transform: rotate(0);
    }

    50% {
        bottom: 0px;
        transform: rotate(0);
    }

    100% {
        bottom: 0px;
        transform: rotate(145deg);
    }
}

@keyframes bottom-2 {
    0% {
        bottom: 0px;
        transform: rotate(145deg);
    }

    50% {
        bottom: 0px;
        transform: rotate(0);
    }

    100% {
        bottom: 0;
        transform: rotate(0);
    }
}

@keyframes scaled {
    50% {
        transform: scale(0);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes scaled-2 {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}</style>
