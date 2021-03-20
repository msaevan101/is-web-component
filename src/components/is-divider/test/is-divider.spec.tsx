import { newSpecPage } from '@stencil/core/testing';
import { IsDivider } from '../is-divider';

describe('is-divider', () => {
  let page;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [IsDivider],
      html: `<is-divider></is-divider>`
    });
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <is-divider>
        <mock:shadow-root>
          <div class="is-divider is-center is-default">
        </mock:shadow-root>
      </is-divider>
    `);
  });
});
