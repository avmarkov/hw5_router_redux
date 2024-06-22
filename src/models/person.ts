export type PersonColor = 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'cyan';


export interface Person {
    username?: string;
    nickname: string;
    color: PersonColor;
}
