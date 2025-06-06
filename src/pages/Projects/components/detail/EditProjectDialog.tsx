/**
 * Edit Project Dialog Component
 * 
 * Dialog for editing an existing project. Contains a form for updating project details.
 */

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import ProjectForm from './ProjectForm';
import { Project, ProjectDetail } from '../../types';

interface EditProjectDialogProps {
  projectId: string;
  projectData: {
    name: string;
    description?: string;
  };
  onProjectUpdated?: (project: ProjectDetail) => void;
  trigger?: React.ReactNode;
}

const EditProjectDialog: React.FC<EditProjectDialogProps> = ({
  projectId,
  projectData,
  onProjectUpdated,
  trigger,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSuccess = (project: ProjectDetail) => {
    setOpen(false);
    if (onProjectUpdated) {
      onProjectUpdated(project);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <ProjectForm
          projectId={projectId}
          initialData={projectData}
          onSuccess={handleSuccess}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectDialog;
