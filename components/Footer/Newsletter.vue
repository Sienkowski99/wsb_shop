<template>
  <section class="section newsletter-section">
    <div class="container newsletter-container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="box has-text-centered">
            <h1 class="title is-1">Newsletter</h1>
            <p>Nie przegap okazji, dołącz do naszego newslettera.</p>
            <br />
            <div class="newsletter-form-container">
              <form id="newsletter-form" class="is-flex">
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="email"
                      id="email"
                      placeholder="Podaj swój adres Email"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button
                      class="button is-dark"
                      style="vertical-align: middle"
                    >
                      Zapisz się! &nbsp;&nbsp;⮕
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <label class="checkbox">
                  <input type="checkbox" id="privacy" required />
                  Zapoznałem/am się z polityką prywatności
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.newsletter-section {
  background-color: rgb(249, 247, 244);
  padding: 50px 0;
  width: 100%;
}

.newsletter-container {
  width: 100%;
}

.box {
  background-color: rgb(249, 247, 244);
  box-shadow: none;
  border: none;
}

.button.is-dark {
  background-color: rgb(217, 207, 206);
  border: none;
}

.button.is-dark:hover {
  background-color: rgb(221, 213, 212);
}

.has-text-centered {
  text-align: center;
}

.newsletter-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
