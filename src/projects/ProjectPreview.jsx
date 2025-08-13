function ProjectPreview({ url }) {
    return (
      <div className="max-w-3xl mx-auto">
        <iframe
          src={url}
          width="100%"
          height="500"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          loading="lazy"
          title="Project Preview"
        ></iframe>
      </div>
    );
  }
  
  // Usage
  

export default ProjectPreview;