const ProjectLayout = ({children}) =>{
    return(
        <div>
            <h2> This is common for all prject's routes </h2>
            {children}
        </div>
    )
}

export default ProjectLayout;