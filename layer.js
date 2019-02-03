// Sequential model
const model = tf.sequential();

model.add(
  tf.layers.simpleRNN({
    // only needed in first layer
    inputShape: [20, 4],
    // the number of units or neurons
    units: 20,
    // weight
    recurrentInitializer: "GlorotNormal"
  })
);
