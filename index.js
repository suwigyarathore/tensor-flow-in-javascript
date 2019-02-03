// Shape of tensor with 4 rows and 2 columns
const shape = [4, 2];

//Feed data in tensor
const data = tf.tensor([4, 6, 5, 9, 13, 25, 1, 57], shape);

//set variable with zeros
const data2 = tf.variable(tf.zeros([8]));

//Print the data
data2.print();

//Assign new values but shape shud be same
data2.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 5]));

//Print the data
data2.print();
