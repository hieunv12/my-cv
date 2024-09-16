import React from 'react';
import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

const projects = [
  {
    title: "Dự án: Senior UI/UX Product Designer",
    time: "Aug 2018 - Present 1 year",
    role: "Vị trí: Senior UI/UX Product Designer",
    description: `
      Build a mobile for managing marketing campaigns across email, WhatsApp, and SMS channels. 
      - Developed main features: campaign creation, automation flows, secure payment integration with Stripe.
      - Utilized React Native, TypeScript, and React Query for front-end development.
      - Integrated third-party APIs: Firebase, Stripe, WhatsApp.
    `,
    technologies: `
      Used technologies: Socket, Webview, Stripe, Notification, Redux-toolkit, React Query, Chart-kit, Code-push, Hook-form, Zod, Yup, etc.
    `,
  },

];

const Projects = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Projects</h1>
      <Collapse accordion>
        {projects.map((project, index) => (
          <Panel header={project.title} key={index}>
            <Card>
              <p><strong>{project.role}</strong></p>
              <p>{project.time}</p>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
              
            </Card>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Projects;
