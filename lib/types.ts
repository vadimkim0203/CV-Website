import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectData {
    title: string, 
    location: string, 
    description: string,
    
}