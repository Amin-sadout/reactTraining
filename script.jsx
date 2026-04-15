import { useState } from 'react';


const Header = ({name, role}) => {
return (
<div>
<h1>{name}</h1>
<p>{role}</p>
</div>
);};

const About = ({title, text}) => {
    return ( 
    <div> 
        <h1>{title}</h1>
         <p>{text}</p> 
    </div> 
    );};

const ProjectCard = ({name, description}) => {

    return (
        <div>
  <h1>{name}</h1>
  <p>{description}</p>
 </div> 
 );};

 const ProjectMessage = () => {
    const projects = [];
    return (
  <div>
    {projects.length === 0 ? <p>No Projects Yet</p> : <p>Projects exist</p>}
    {projects.length === 0 && <p>No projects yet</p>}
  </div>
  

 );
 };

 const TextPreview = () => {
  const [text, setText] = useState('')
const handleChange = (event) => {
  setText(event.target.value);
};

const handleClear = () => {
   setText('');
}

return (
<div>
<input type="text" value={text} onChange={handleChange}></input>
<button onClick={handleClear}>Clear</button>
<p>{text}</p>
</div> );
 }


const Something = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
      setValue(value + 1)
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
};

const ClickExample = () => {
    return (
        <div>
            <button onClick={handleClick}>Press me</button>
        </div>
    )
}

const App = () => {

const projects = [
  { name: '...', description: '...' },
  { name: '...', description: '...' }
];

return (
  <div>
    <Header name="possiblyadev" role="dev" />
    <About title="title" text="text" />

    {projects.length === 0 ? (
      <p>No projects yet</p>
    ) : (
      projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
          />
        );
      })
    )}
  </div>
);}
