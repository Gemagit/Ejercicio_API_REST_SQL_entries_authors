const authorQueries = {
    getAllAuthors: `
          SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.email,a.image
          FROM authors AS a
          INNER JOIN entries AS e
          ON a.id_entries=e.id_entries
          ORDER BY a.name;
      `,
    createAuthor: `INSERT INTO authors(name,surname,id_author,image) 
      VALUES ($1,$2,$3
      SELECT id_author $4`,
    updateAuthor: `UPDATE authors
      SET
          name=$1, 
          surname=$2, 
          image=$3,
          id_author=$4
      WHERE 
          name = $5`,
    deleteAuthor: `
                DELETE FROM authors
                WHERE name=$1`
};
module.exports = authorQueries;
