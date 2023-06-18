function findLCS() {
    var string1 = document.getElementById('string1').value;
    var string2 = document.getElementById('string2').value;
  
    var lcs = longestCommonSubsequence(string1, string2);
  
    document.getElementById('result').innerText = 'Longest Common Subsequence: ' + lcs;
  }
  
  function longestCommonSubsequence(string1, string2) {
    var m = string1.length;
    var n = string2.length;
    var dp = [];
  
    for (var i = 0; i <= m; i++) {
      dp[i] = [];
      for (var j = 0; j <= n; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = 0;
        } else if (string1[i - 1] === string2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    var lcs = '';
    var i = m;
    var j = n;
    
    while (i > 0 && j > 0) {
      if (string1[i - 1] === string2[j - 1]) {
        lcs = string1[i - 1] + lcs;
        i--;
        j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  
    return lcs;
  }
  