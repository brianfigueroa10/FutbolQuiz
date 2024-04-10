export type Users = {
    name: string;
    score: number;
}


export const getAllUsers = async (): Promise<Users[] | null> => {
    try {
        const res = await fetch(`http://localhost:3000/api/results`, { cache: "no-store", });
        if (res.ok) {
            const data = await res.json();
            return data.users;
        }
    } catch (error) {
        console.log(error);
    }
    return null;
}
