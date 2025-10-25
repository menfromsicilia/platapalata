<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">Часто задаваемые вопросы</h2>
      <div class="faq-section">
        <details v-for="(faq, index) in faqs" :key="index">
          <summary>{{ faq.question }}</summary>
          <div class="faq-answer">
            {{ faq.answer }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
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
  },
  {
    question: 'Работаете ли вы круглосуточно?',
    answer: 'Да, наш сервис работает 24/7. Вы можете оформить заказ в любое время. Служба поддержки отвечает ежедневно с 9:00 до 23:00 МСК, но автоматическое пополнение доступно всегда.'
  }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.section {
  padding: 4rem 0;
  background: $color-bg-primary;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text-light;
  text-align: center;
  margin-bottom: 2rem;
}

/* FAQ Section - точная копия из оригинала */
.faq-section {
  max-width: 100%;
  margin: 0 auto;
}

details {
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
