import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { BlsLib } from '../src/components/BlsLib.js';
import '../src/bls-lib.js';

let el: BlsLib;
// Clean and initialize the component
const cleanComponent = async () => {
  el = await fixture<BlsLib>(html`<bls-lib></bls-lib>`);
  await el.updateComplete;
}

describe('BlsLib', () => {

  describe('Default input value', () => {
    cleanComponent();
    it('Props value', () => {
      expect(el.description).to.equal('Default description');
      assert.typeOf(el.description, 'String');

      expect(el.descriptionType).to.equal('info');
      assert.typeOf(el.descriptionType, 'String');

      expect(el.label).to.equal('Default label');
      assert.typeOf(el.label, 'String');

      expect(el.placeholder).to.equal('Default placeholder');
      assert.typeOf(el.placeholder, 'String');

      expect(el.withDescription).to.equal(false);
      assert.typeOf(el.withDescription, 'Boolean');
      
      expect(el.withLabel).to.equal(false);
      assert.typeOf(el.withLabel, 'Boolean');
    });
  });
    

  // it('has a default title "Hey there" and counter 5', async () => {
  //   const el = await fixture<BlsLib>(html`<bls-lib></bls-lib>`);

  //   expect(el.title).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<BlsLib>(html`<bls-lib></bls-lib>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture<BlsLib>(html`<bls-lib title="attribute title"></bls-lib>`);

  //   expect(el.title).to.equal('attribute title');
  // });

  // it('passes the a11y audit', async () => {
  //   const el = await fixture<BlsLib>(html`<bls-lib></bls-lib>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
