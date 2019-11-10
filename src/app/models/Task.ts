export interface Task{
    TaskId: number;
    TaskName: string;
    TaskDescription: string;
    DateCreated?: Date;
    DateUpdated?: Date;
    IsNotStarted: boolean;
    IsInProgress: boolean;
    IsCompleted: boolean;
}