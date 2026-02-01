import './styles.css';

// Load Ankh components - path resolved at runtime
const base = import.meta.env.BASE_URL;
import(/* @vite-ignore */ `${base}ankh/ankh.esm.js`);

const app = document.getElementById('app')!;

app.innerHTML = `
  <main>
    <h1>Button</h1>
    <p>Button component with 5 variants</p>

    <section>
      <h2>Variants</h2>
      <div class="demo-row">
        <ankh-button variant="filled">Filled</ankh-button>
        <ankh-button variant="outlined">Outlined</ankh-button>
        <ankh-button variant="text">Text</ankh-button>
        <ankh-button variant="elevated">Elevated</ankh-button>
        <ankh-button variant="tonal">Tonal</ankh-button>
        </div>
    </section>

    <section>
      <h2>Sizes</h2>
      <div class="demo-row">
        <ankh-button size="small">Small</ankh-button>
        <ankh-button size="medium">Medium</ankh-button>
        <ankh-button size="large">Large</ankh-button>
      </div>
    </section>

    <section>
      <h2>States</h2>
      <div class="demo-row">
        <ankh-button variant="filled">Normal</ankh-button>
        <ankh-button variant="filled" disabled>Disabled</ankh-button>
      </div>
    </section>
  </main>
`;
