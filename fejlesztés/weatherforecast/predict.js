const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const model = await tf.loadLayersModel('file://path/to/your/model.json');
    return model;
}

async function predictWithModel(model, inputData) {
    const prediction = model.predict(inputData);
    return prediction;
}

loadModel().then(model => {
    const inputData = tf.tensor2d([/* your input data here */]);
    const prediction = predictWithModel(model, inputData);
    console.log(prediction);
});