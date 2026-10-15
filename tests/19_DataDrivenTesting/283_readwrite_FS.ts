import fs from 'fs';
import path from 'path';


const filepath=path.join(__dirname,'280_Users.json');
console.log('filepath :',filepath);

const read_data= fs.readFileSync(filepath,'utf-8');
const userDataObject=JSON.parse(read_data);
console.log(userDataObject);

console.log(userDataObject.username);
console.log(userDataObject.password);

//Writing Data to a JSON File

const user = {
  name: "Vinay",
  role: "Lead Engineer Automation"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");

