<template>
    <div v-if="store.isAuthenticatedAdmin" class="appbar">
        <div class="">
            <nav class="navbar navbar-dark  position-fixed fixed-top p-3" style="z-index: 10; background-color: #000055; box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
                <button class="navbar-toggler" type="button">
                    <span class="navbar-toggler-icon ms-2"></span>
                </button>
                <div class="btn-group">
                    <button class="btn btn-primary me-2" style="border-radius: 10px;" type="button" @click="signOut">Đăng xuất</button>
                </div>
            </nav>
        </div>
        <div class="container" style="height: 60px;width: 100%;"></div>
    </div>
</template>

<script>
import { useRouter } from "vue-router"
import { useAdminStore } from '@/stores/store';
import { defineComponent } from "vue";
import adminService from "@/services/admin.service";

export default defineComponent({
    setup() {
        const store = useAdminStore();
        const router = useRouter();
        const signOut = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                };
                await adminService.signOut({ headers });
                localStorage.removeItem('token');
                store.setIsAuthenticatedAdmin(false);
                router.push({ name: 'admin.signin' });
            } catch (error) {
                console.log(error);
            }
        };
        return {
            store,
            signOut
        }
    },
});
</script>