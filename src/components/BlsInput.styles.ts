import { css } from 'lit';

export default css`
  :host {
    --light-color: #818181;
    --dark-color: #959595;
    --light-text-color: #0e0e0e;
    --dark-text-color: #f3f3f3;
    --light-color-focused: #476ead;
    --dark-color-focused: #859dc3;
    --light-border: #323c79;
    --dark-border: #a1cfff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .group {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
  }

  .group__input {
    width: 99%;
    padding: 0.6rem 0;
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
  }

  .group__label {
    position: absolute;
    top: 16px;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    pointer-events: none;
    transition: 0.5s;
    text-transform: capitalize;
  }

  .group__input:focus + .group__label,
  .group__input:not(:placeholder-shown).group__input:not(:focus)
    + .group__label {
    top: -7px;
    left: 0;
    font-size: 12px;
  }

  .group__input[readonly] {
    border-style: dotted;
    cursor: not-allowed;
    color: #777;
  }

  .group__input[disabled] {
    --input-border: #ccc;
    background-color: #eee;
    cursor: not-allowed;
  }

  .group.light .group__input {
    color: var(--light-text-color);
    border-bottom: 1px solid var(--light-color);
  }

  .group.dark .group__input {
    color: var(--dark-text-color);
    border-bottom: 1px solid var(--dark-color);
  }

  .group.light .group__label {
    color: var(--light-color);
  }

  .group.dark .group__label {
    color: var(--dark-color);
  }

  .group.light .group__input:focus {
    border-bottom-color: var(--input-focus-color, var(--light-color-focused));
    color: var(--light-text-color);
  }

  .group.dark .group__input:focus {
    border-bottom-color: var(--input-focus-color, var(--dark-color-focused));
    color: var(--dark-text-color);
  }

  .group.light .group__input:focus + .group__label {
    color: var(--input-focus-color, var(--light-color-focused));
  }

  .group.dark .group__input:focus + .group__label {
    color: var(--input-focus-color, var(--dark-color-focused));
  }
`;
