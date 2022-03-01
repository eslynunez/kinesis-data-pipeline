"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisDataPipelineStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cdk_lib_2 = require("aws-cdk-lib");
const config_1 = require("../config");
class KinesisDataPipelineStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'KinesisDataPipelineQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        const dataStream = new aws_cdk_lib_2.aws_kinesis.Stream(this, `${config_1.resourcePrefix}--data-stream`, {});
    }
}
exports.KinesisDataPipelineStack = KinesisDataPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1kYXRhLXBpcGVsaW5lLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2luZXNpcy1kYXRhLXBpcGVsaW5lLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFnRDtBQUVoRCw2Q0FBcUQ7QUFDckQsc0NBQTJDO0FBRTNDLE1BQWEsd0JBQXlCLFNBQVEsbUJBQUs7SUFDakQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2Q0FBNkM7UUFFN0MsbUJBQW1CO1FBQ25CLGtFQUFrRTtRQUNsRSxpREFBaUQ7UUFDakQsTUFBTTtRQUVOLE1BQU0sVUFBVSxHQUFHLElBQUkseUJBQU8sQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFLEdBQUcsdUJBQWMsZUFBZSxFQUFFLEVBQzlFLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWRELDREQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IGF3c19raW5lc2lzIGFzIGtpbmVzaXMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyByZXNvdXJjZVByZWZpeCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRGF0YVBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG5cbiAgICAvLyBleGFtcGxlIHJlc291cmNlXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdLaW5lc2lzRGF0YVBpcGVsaW5lUXVldWUnLCB7XG4gICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgZGF0YVN0cmVhbSA9IG5ldyBraW5lc2lzLlN0cmVhbSggdGhpcywgYCR7cmVzb3VyY2VQcmVmaXh9LS1kYXRhLXN0cmVhbWAsIHtcbiAgICB9KTtcbiAgfVxufVxuIl19