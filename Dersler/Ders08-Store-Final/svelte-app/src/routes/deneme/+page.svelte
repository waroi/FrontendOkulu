<script>
  let todos = [];
  let newTodo;
  const addTodo = () => {
    todos = [...todos, newTodo];
    newTodo = "";
  };
  const removeTodo = (index) => {
    todos = todos.filter((x) => todos.indexOf(x) !== index);
  };
</script>

<main>
  <input type="text" bind:value={newTodo} />
  <button on:click={addTodo}>Ekle</button>
  {#each todos as todo, index}
    <div>
      <span>{todo}</span>
      <button on:click={() => removeTodo(index)}>Sil</button>
    </div>
  {/each}
</main>
