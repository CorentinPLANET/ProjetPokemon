<?php

/**
 * Get pokemon data by its id
 * @param (int) $id
 * id of pokemon
 * @return (array) stat list of pokemon
 */
function getPokemonData($id)
{
    $db = connect();
    try {
        return $db->query("SELECT * FROM pokemonData WHERE id=" + $id);
    } catch (PDOException $e) {
        die('Erreur : ' . $e->getMessage());
    }
};
/**
 * Get attack data by its id
 * @param (int) $id
 * id of attack
 * @return (array) parameters of attack
 */
function getAttackData($id)
{
    $db = connect();
    try {
        return $db->query("SELECT * FROM attackData WHERE id=" + $id);
    } catch (PDOException $e) {
        die('Erreur : ' . $e->getMessage());
    }
};
