// Define a model
function simpleAdd(inp1, inp2) {
  // tidy for free up GPU memory once fuction is returned
  return tf.tidy(() => {
    const x1 = inp1;
    const x2 = inp2;
    const y = x1.add(x2);
    return y;
  });
}

const data5 = tf.tensor1d([4, 6, 5, 9]);
const data6 = tf.tensor1d([5, 4, 5, 9]);

const result = simpleAdd(data5, data6);
result.print();
