// Fetch Catalog List
type Catalog = {
    name: string,
    title: string,
    synopsis: string,
    order: string
}

type AllCatalogs = Array<Catalog>

export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  
export function fetchAllCatalogs() {
    return new Promise<{data: string}>((resolve) => 
        setTimeout(() => resolve({data: 'hello'}), 500)
    );
}