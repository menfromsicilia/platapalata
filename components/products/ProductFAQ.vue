<template>
  <div class="faq-wrapper">
    <h2 class="section-title">Часто задаваемые вопросы</h2>
    <div class="faq-section">
      <details v-for="(faq, index) in (customFaqs || defaultFaqs)" :key="index" @toggle="handleToggle">
        <summary>{{ faq.question }}</summary>
        <div class="faq-answer">
          {{ faq.answer }}
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
}

interface Props {
  customFaqs?: FAQ[]
}

const { customFaqs } = defineProps<Props>()

const handleToggle = (event: Event) => {
  const details = event.target as HTMLDetailsElement
  // Если аккордион закрывается, снимаем фокус
  if (!details.open) {
    const summary = details.querySelector('summary')
    summary?.blur()
  }
}

const defaultFaqs: FAQ[] = [
  {
    question: 'Как быстро происходит пополнение?',
    answer: 'Обычно пополнение происходит моментально после успешной оплаты. В редких случаях может потребоваться до 15 минут для обработки заказа.'
  },
  {
    question: 'Безопасно ли пополнять аккаунт через ваш сервис?',
    answer: 'Да, мы работаем только с официальными поставщиками и используем защищённые каналы передачи данных. Ваши данные надёжно защищены, а все транзакции проходят через проверенные платёжные системы.'
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'После успешного пополнения возврат средств невозможен согласно правилам продажи цифровых товаров. Если возникла ошибка при оформлении заказа - свяжитесь с нашей поддержкой, и мы поможем решить проблему.'
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Мы принимаем банковские карты Visa, MasterCard и МИР, платежи через Систему быстрых платежей (СБП), электронные кошельки и криптовалюту. Выберите удобный способ при оформлении заказа.'
  },
  {
    question: 'Нужна ли регистрация на сайте?',
    answer: 'Нет, для покупки регистрация не требуется. Достаточно указать email для получения чека и деталей заказа. Все ваши покупки будут отправлены на указанный адрес электронной почты.'
  },
  {
    question: 'Что делать, если пополнение не пришло?',
    answer: 'Если через 15 минут после оплаты пополнение не поступило, проверьте правильность указанных данных аккаунта. Если всё верно - свяжитесь с нашей службой поддержки через Telegram, указав номер заказа.'
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.faq-wrapper {
  width: 100%;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text-light;
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section {
  width: 100%;
}

details {
  width: 100%;
  background: $color-bg-secondary;
  border: 1px solid $color-bg-accent;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;
  outline: none;

  &:focus {
    outline: none;
  }

  &[open] {
    border-color: $color-bg-accent;
    box-shadow: $shadow-sm;
  }

  &[open] summary {
    background: $color-bg-accent;
    color: $color-accent-blue;
    border-bottom: 1px solid $color-bg-accent;
  }

  &[open] summary::after {
    transform: translateY(-50%) rotate(180deg);
  }
}

summary {
  padding: 1.25rem 3rem 1.25rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  color: $color-text-light;
  user-select: none;
  transition: all 0.2s;
  position: relative;
  list-style: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &::after {
    content: '▼';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s;
    color: $color-accent-blue;
    font-size: 0.75rem;
  }

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    color: $color-accent-blue;
    background: $color-bg-accent;
  }
}

.faq-answer {
  padding: 1.25rem 1.5rem;
  color: $color-text-light;
  line-height: 1.8;
  opacity: 0.9;
}

</style>

