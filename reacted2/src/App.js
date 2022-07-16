import Header  from './components/Header';
import TodoList from'./components/TodoList'; 
import './App.css';

 


export default function App(){
  const todos = 
    [{
      "id": 1,
      " title": "De-engineered local knowledge user",
      " description": "Virtual optimal strategy",
      " done": "Reactive analyzing Graphic Interface",
      "date ": "19.09.2021"
    }, {
      "id": 2,
      " title": "Front-line fault-tolerant complexity",
      " description": "Distributed object-oriented website",
      " done": "Reverse-engineered 24 hour secured line",
      "date ": "04.08.2021"
    }, {
      "id": 3,
      " title": "Persistent national definition",
      " description": "Optional content-based complexity",
      " done": "Operative asymmetric service-desk",
      "date ": "09.09.2021"
    }, {
      "id": 4,
      " title": "Function-based needs-based portal",
      " description": "Innovative 6th generation budgetary management",
      " done": "Universal responsive capacity",
      "date ": "05.04.2022"
    }, {
      "id": 5,
      " title": "Focused 3rd generation artificial intelligence",
      " description": "Proactive uniform intranet",
      " done": "Sharable dynamic instruction set",
      "date ": "11.06.2022"
    }, {
      "id": 6,
      " title": "Assimilated 5th generation installation",
      " description": "Persevering context-sensitive circuit",
      " done": "Visionary system-worthy project",
      "date ": "04.02.2022"
    }, {
      "id": 7,
      " title": "Ergonomic mission-critical Graphic Interface",
      " description": "Robust background interface",
      " done": "Triple-buffered asymmetric matrix",
      "date ": "12.10.2021"
    }, {
      "id": 8,
      " title": "Versatile system-worthy attitude",
      " description": "Synergized 3rd generation workforce",
      " done": "Synchronised actuating capability",
      "date ": "11.05.2022"
    }, {
      "id": 9,
      " title": "Customer-focused human-resource matrix",
      " description": "Multi-lateral uniform knowledge base",
      " done": "Switchable composite leverage",
      "date ": "06.02.2022"
    }, {
      "id": 10,
      " title": "Realigned fault-tolerant protocol",
      " description": "User-centric tertiary artificial intelligence",
      " done": "Streamlined fault-tolerant knowledge base",
      "date ": "18.07.2021"
    }, {
      "id": 11,
      " title": "Right-sized disintermediate interface",
      " description": "Devolved methodical complexity",
      " done": "Innovative encompassing project",
      "date ": "12.07.2022"
    }, {
      "id": 12,
      " title": "Expanded fault-tolerant project",
      " description": "Up-sized methodical hierarchy",
      " done": "Public-key well-modulated methodology",
      "date ": "02.09.2021"
    }, {
      "id": 13,
      " title": "Customizable responsive structure",
      " description": "Ameliorated cohesive orchestration",
      " done": "User-centric responsive extranet",
      "date ": "11.09.2021"
    }, {
      "id": 14,
      " title": "Profit-focused zero administration knowledge user",
      " description": "Reduced directional internet solution",
      " done": "Visionary systematic complexity",
      "date ": "30.04.2022"
    }, {
      "id": 15,
      " title": "Devolved encompassing groupware",
      " description": "Self-enabling tertiary complexity",
      " done": "Synergized cohesive archive",
      "date ": "28.11.2021"
    }, {
      "id": 16,
      " title": "Realigned composite neural-net",
      " description": "Optional 5th generation function",
      " done": "Integrated value-added challenge",
      "date ": "02.01.2022"
    }, {
      "id": 17,
      " title": "Enterprise-wide multimedia framework",
      " description": "Persistent real-time paradigm",
      " done": "User-centric value-added artificial intelligence",
      "date ": "25.11.2021"
    }, {
      "id": 18,
      " title": "Synergized context-sensitive moratorium",
      " description": "Up-sized scalable leverage",
      " done": "Reactive 3rd generation knowledge user",
      "date ": "13.07.2022"
    }, {
      "id": 19,
      " title": "Programmable neutral conglomeration",
      " description": "Fully-configurable holistic matrix",
      " done": "Polarised client-driven parallelism",
      "date ": "15.08.2021"
    }, {
      "id": 20,
      " title": "Synergized maximized database",
      " description": "Reverse-engineered logistical help-desk",
      " done": "Decentralized mission-critical parallelism",
      "date ": "17.10.2021"
    }, {
      "id": 21,
      " title": "Switchable executive core",
      " description": "Progressive encompassing standardization",
      " done": "User-centric mobile structure",
      "date ": "07.12.2021"
    }, {
      "id": 22,
      " title": "Synergistic value-added model",
      " description": "Devolved scalable forecast",
      " done": "Fundamental optimizing portal",
      "date ": "06.05.2022"
    }, {
      "id": 23,
      " title": "Intuitive optimizing analyzer",
      " description": "User-centric web-enabled focus group",
      " done": "Enterprise-wide scalable workforce",
      "date ": "18.12.2021"
    }, {
      "id": 24,
      " title": "Cloned analyzing hub",
      " description": "Devolved optimizing support",
      " done": "Open-source modular focus group",
      "date ": "01.02.2022"
    }, {
      "id": 25,
      " title": "Quality-focused 24 hour methodology",
      " description": "Inverse next generation customer loyalty",
      " done": "Persevering human-resource throughput",
      "date ": "07.11.2021"
    }]
  
    
  return(
    <div> 
      <Header/>
      <TodoList todos={todos}/> 
    </div>
  );
}
