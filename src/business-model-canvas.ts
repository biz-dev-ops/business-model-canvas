import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import resetStyles from './modules/styles/reset';
import { Model } from './modules/models/model';

@customElement('business-model-canvas')
export class BusinessReferenceComponent extends LitElement {
  @property()
  model!: Model

  @property({ attribute: "model-json" })
  modelJson!: string

  override render() {
    return html`  
    <table cellspacing="0" border="1">
      <tr>
        <th class="key-partnerships" colspan="2">Key Partnerships</th>
        <th class="key-activities" colspan="2">Key Activities</th>
        <th class="value-propositions" colspan="2">Value Propositions</th>
        <th class="customer-relationships" colspan="2"">Customer Relationships</th>
        <th class="customer-segments" colspan="2">Customer Segments</th>
      <tr>
      <tr>
        <td colspan="2" rowspan="3">
          ${this.keyPartnershipsTemplate()}
        </td>
        <td colspan="2" rowspan="1">
          ${this.keyActivitiesTemplate()}
        </td>
        <td colspan="2" rowspan="3">
          ${this.valuePropositionsTemplate()}
        </td>
        <td colspan="2" rowspan="1">
          ${this.customerRelationshipTemplate()}
        </td>
        <td colspan="2" rowspan="3">
          ${this.customerSegmentsTemplate()}
        </td>
      </tr>
      <tr>
        <th class="key-resources" colspan="2">Key Resources</th>
        <th class="channels" colspan="2">Channels</th>
      </tr>
      <tr>
        <td colspan="2">
          ${this.keyResourcesTemplate()}
        </td>
        <td colspan="2">
          ${this.channelsTemplate()}
        </td>
      </tr>
      <tr>
      </tr>
        <th class="cost-structure" colspan="5">Cost Structure</th>
        <th class="revenue-streams" colspan="5">Revenue Streams</th>
      </tr>
      <tr>
        <td colspan="5">
         ${this.costStructureTemplate()}
        </td>
        <td colspan="5">
          ${this.revenueStreamsTemplate()}
        </td>
      </tr>
    </table>`;
  }

  override update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("modelJson")) {
      this.model = JSON.parse(this.modelJson);
    }

    super.update(changedProperties);
  }
  

  keyPartnershipsTemplate() : TemplateResult {
    if (this.model?.keyPartnerships) {
      return html`${this.model.keyPartnerships.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
        <p>Who are our key suppliers?</p>
        <p>Which key resources are we acquiring from partners?</p>
        <p>Which key activities our partners perform?</p>
        <p><strong>Motivation for partnerships</strong></p>
        <ul>
          <li>Optimization and economy</li>
          <li>Reduction of risk and uncertainty</li>
          <li>Acquisition of particular resources and activities</li>
        </ul>`;
    }
  }

  keyActivitiesTemplate(): TemplateResult {
    if (this.model?.keyActivities) {
      return html`${this.model.keyActivities.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>What key activities do our value propostions require?</p>
      <p>Our distribution channels?</p>
      <p>Customer relationships?</p>
      <p>Revenue Streams?</p>
      <p><strong>Categories</strong></p>
      <ul>
        <li>Production</li>
        <li>Problem Solving</li>
        <li>Platform/Network</li>
      </ul>`;
    }
  }

  valuePropositionsTemplate(): TemplateResult {
    if (this.model?.valuePropositions) {
      return html`${this.model.valuePropositions.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>Which value do we deliver to the customer?</p>
      <p>Which one of our customer's problems are we helping to solve?</p>
      <p>What bundles of products and services are we offering to each customer segment?</p>
      <p>Which customer needs are we satisfying?</p>
      <p><strong>Characteristics</strong></p>
      <ul>
        <li>Newness</li>
        <li>Performance</li>
        <li>Customization</li>
        <li>"Getting Job Done"</li>
        <li>Design</li>
        <li>Brand/Status</li>
        <li>Price</li>
        <li>Cost Reduction</li>
        <li>Risk Reduction</li>
        <li>Accessibility</li>
        <li>Convenience/Usability</li>
      </ul>`;
    }
  }

  customerRelationshipTemplate(): TemplateResult {
    if (this.model?.customerRelationships) {
      return html`${this.model.customerRelationships.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>What type of relationship each customer segment expects?</p>
      <p>Which ones have we established?</p>
      <p>How are they integrated with rest of the biz. model?</p>
      <p>How much they cost us?</p>
      <p><strong>Examples</strong></p>
      <ul>
        <li>Personal assistance</li>
        <li>Self-service</li>
        <li>Automated services</li>
        <li>Communities</li>
        <li>Co-creation</li>
      </ul>`;
    }
  }

  customerSegmentsTemplate(): TemplateResult {
    if (this.model?.customerSegments) {
      return html`${this.model.customerSegments.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>For whom are we creating value?</p>
      <p>Who are our most important customers?</p>
      <p><strong>Examples</strong></p>
      <ul>
        <li>Mass market</li>
        <li>Niche market</li>
        <li>Segmented</li>
        <li>Diversified</li>
        <li>Multi-sided platform</li>
      </ul>`;
    }
  }

  keyResourcesTemplate(): TemplateResult {
    if (this.model?.keyResources) {
      return html`${this.model.keyResources.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>What key resources our value proposition requires?</p>
      <p>Our distribution channels? Customer relationships?</p>
      <p>Revenue Streams?</p>
      <p><strong>Types of resources</strong></p>
      <ul> 
        <li>Physical</li>
        <li>Intellectual (brand, patents, copyrights, data)</li>
        <li>Human</li>
        <li>Financial</li>
      </ul>`;
    }
  }

  channelsTemplate(): TemplateResult {
    if (this.model?.channels) {
      return html`${this.model.channels.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>Through which channels our customer segments want to be reached?</p>
      <p>How are we reaching them now?</p>
      <p>How are channels integrated?</p>
      <p>Which ones work best?</p>
      <p>Which ones are most cost efficient?</p>
      <p>How are we integrating them with customer routines?</p>`;
    }
  }

  costStructureTemplate(): TemplateResult {
    if (this.model?.channels) {
      return html`${this.model.channels.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>What are most important costs inherent to our business model?</p>
      <p>Which key resources are most expensive?</p>
      <p>Which key activities are most expensive?</p>
      <p><strong>Is your business more?</strong></p>
      <p>Cost driven (cost structure, low price prop, maximum automation, extensive outsourcing)</p>
      <p>Value driven (focused on value creation, premium value prop)</p>`;
    }
  }

  revenueStreamsTemplate(): TemplateResult {
    if (this.model?.channels) {
      return html`${this.model.channels.map(item => html`<p>${item}</p>`)}`;
    }
    else {
      return html`
      <p>For what value are our customers willing to pay?</p>
      <p>What are they currently paying for?</p>
      <p>How are they paying?</p>
      <p>How would they prefer to pay?</p>
      <p>How much each revenue stream contributes overall?</p>`;
    }
  }

  static override get styles() {
    const styles = css`
    body {font-family: 'Headland One', serif;}

    table {
      border: none;
      border: var(--line-base) solid var(--color-brand-a40);
      border-radius: var(--radius-base);
      width: 100%;
    }

    th {
      border: none;
      border-top: var(--line-base) solid var(--color-brand-a40);
      border-left: var(--line-base) solid var(--color-brand-a40);
      font-weight: 700;
      font-size: 1em;
      text-align: left;
    }

    td {
      border: none;
      border-left: var(--line-base) solid var(--color-brand-a40);
      vertical-align: top;
      height: 200px;
      width: 200px;
      padding: 6px;
    }

    p,li {
      font-weight: 300;
      font-size: 0.8em;
    }
    `;

    return [resetStyles, styles];
  }
}