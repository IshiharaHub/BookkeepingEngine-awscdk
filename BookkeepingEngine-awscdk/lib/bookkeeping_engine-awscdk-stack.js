const { Stack, Duration } = require('aws-cdk-lib');
const widget_service = require('../lib/widget_service');

// const sqs = require('aws-cdk-lib/aws-sqs');

class BookkeepingEngineAwscdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new widget_service.WidgetService(this, 'Widgets');
  }
}

module.exports = { BookkeepingEngineAwscdkStack }
