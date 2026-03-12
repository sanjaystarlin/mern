const Groq = require("groq-sdk")

const groq = new Groq({
apiKey: process.env.GROQ_API_KEY
})

exports.generateQuestion = async (req,res)=>{

try{

const completion = await groq.chat.completions.create({
model: "llama-3.1-8b-instant",
messages:[
{
role:"user",
content:"Ask one short coding interview question"
}
]
})

res.json({
question: completion.choices[0].message.content
})

}catch(err){

console.log(err)

res.status(500).json({
error:"AI failed"
})

}

}



exports.evaluateAnswer = async (req,res)=>{

const {question,answer} = req.body

try{

const completion = await groq.chat.completions.create({
model:"llama-3.1-8b-instant",
messages:[
{
role:"system",
content:"You are a coding interviewer. Score answers from 1-10 and give feedback."
},
{
role:"user",
content:`Question: ${question}
Answer: ${answer}
Give score and feedback.`
}
]
})

res.json({
result: completion.choices[0].message.content
})

}catch(err){

res.status(500).json({
error:"Evaluation failed"
})

}

}