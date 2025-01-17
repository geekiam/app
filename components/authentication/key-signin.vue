<script setup lang="ts">
import {configure, defineRule, ErrorMessage, Field, Form, type SubmissionHandler} from 'vee-validate';
import {required} from '@vee-validate/rules';
import {useAuthStore} from "~/stores/auth";

defineRule('required', required);

configure({
  generateMessage: (context) => {
    const messages = {
      required: `A valid npub, nsec or hex key is required.`,
    };
    return messages[context?.rule?.name as keyof typeof messages] || `The field ${context.field} is invalid.`;
  },
});
const toastService = useToast();
const router = useRouter();
const authStore = useAuthStore();
const UNABLE_TO_SIGNIN_MESSAGE = 'Unable to sign in with the key provided';
const KEY_NOT_PROVIDED = 'Key has not been provided';
async function onSubmit(values: { key: string }): Promise<boolean> {
    let authenticated = await authStore.signInWithKey(values.key.trim());

    if (authenticated) {
        await router.push('/');
    } else {
        toastService.add({title: UNABLE_TO_SIGNIN_MESSAGE, color: "red"});
    }

    return authenticated;
};
</script>

<template>
  <div class="sign-up-container">
    <Form @submit="onSubmit as SubmissionHandler<{ key: string }>">
      <div class="relative mb-6">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Icon name="material-symbols-light:key-outline" class="w-8 h-8 mr-3 text-orange-500"/>
        </div>
        <Field name="key" type="text" id="key" class="input-style" placeholder="npub / nsec / hex" rules="required"/>
      </div>
      <div class="relative mb-6">

        <button type="submit" class="button-style">
          <Icon name="game-icons:ostrich" class="w-6 h-6 mr-2"/>
          Sign in
        </button>
        <div class="break-before-all">
          <ErrorMessage as="p" name="key" class="text-red-500 mt-3"/>
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.input-style {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full ps-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500;
}

.button-style {
  @apply w-full text-center inline-flex items-center justify-center text-white bg-orange-500 hover:bg-orange-500/80 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-3xl text-sm px-5 py-2.5  dark:hover:ring-orange-500/80 dark:focus:ring-orange-500/40 me-2 mb-2;
}
</style>
