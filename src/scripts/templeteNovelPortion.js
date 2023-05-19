const templateNovelPortion = (portion) => {
    return `
      <div id="${portion.id}" class="novel-part-container">
        ${
          portion.isOwner && portion.canDelete
            ? `<button class="delete-btn">
                <span class="delete-label">
                Se passar 1h ou mais após a postagem, você não poderá mais excluí-la
                </span>🗑️
              </button>`
            : ""
        }
        <div>
          ${portion.data.pharagraph}
        </div>
        <div class="meta">
          ${portion.data.date}
        </div>
      </div>
    `;
  };
  
  export default templateNovelPortion;