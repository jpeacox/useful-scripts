export async function yesOrNo(query) {
  return (await question(`${query} (Y/n) `)).toLowerCase() === 'y';
}
